

# Remove Debug Console Logs from Hero & Video Hook

## Overview
Remove all debug `console.log` statements from the Hero component and the `useAdaptiveVideo` hook to ensure professional appearance in production. These debug statements were useful during development but should not be visible to end users.

## Files to Modify

### 1. `src/components/Hero.tsx`
Remove lines 16-22 containing debug statements:
- Comment "EXPLICIT DEBUG: Log when src changes"
- 6 console.log statements with emoji prefixes

Also remove the unused `debugInfo` variable from the hook destructuring since it's only used for debug logging.

### 2. `src/hooks/use-adaptive-video.tsx`
Remove all console.log statements throughout the file (approximately 50+ statements). Key areas:
- Lines 10-18: Initial debug logging
- Lines 55-60: Source setting debug
- Lines 65, 74-81: Cache buster and video state logging
- Lines 84-98: Video event listeners for debugging
- Lines 108-113, 116-140, 175-186: Post-reload state logging
- Lines 192-239: Network quality testing debug output
- Lines 244-299: HD video loading debug output
- Lines 304, 310, 315-336: Main logic debug output
- Lines 344-345: State debug output

Also remove:
- `debugInfo` state variable (only used for debugging)
- `debugInfo` from return object
- Debug event listeners added to video element
- Cache buster query parameters that include `&debug=` flags

## Summary of Changes
- **Hero.tsx**: Remove 7 lines of debug code, clean up imports
- **use-adaptive-video.tsx**: Remove ~50 console.log statements, remove debugInfo state, remove debug event listeners

The core video selection logic (network quality detection, HD/compressed video choice) remains fully functional.

