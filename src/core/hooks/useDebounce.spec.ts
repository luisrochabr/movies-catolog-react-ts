import { renderHook, act } from '@testing-library/react';
import useDebounce from './useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial');
  });

  it('should update the debounced value after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      },
    );

    // Update the value and check that it hasn't changed immediately
    rerender({ value: 'updated' });
    expect(result.current).toBe('initial');

    // Fast-forward time by 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now the debounced value should be updated
    expect(result.current).toBe('updated');
  });

  it('should reset the timer if value changes within the delay period', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      },
    );

    rerender({ value: 'first update' });

    // Fast-forward by 250ms (not enough to trigger the delay)
    act(() => {
      jest.advanceTimersByTime(250);
    });

    // Value should not have updated yet
    expect(result.current).toBe('initial');

    // Update the value again before the delay completes
    rerender({ value: 'second update' });

    // Fast-forward another 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now the debounced value should be the latest update
    expect(result.current).toBe('second update');
  });
});
