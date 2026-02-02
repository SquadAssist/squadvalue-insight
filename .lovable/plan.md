
# Add Team Page to Footer Navigation

## Overview
Add a link to the Team page in the footer navigation to showcase the founders' credentials (McKinsey, KU Leuven) and build credibility.

## Change Required

**File:** `src/components/Footer.tsx`

**Action:** Uncomment line 39 to enable the Team page link

The link is already written and just needs to be activated:
```jsx
// Currently (commented out):
{/* <li><Link to="/team" className="text-white/70 hover:text-white transition-colors">Our Team</Link></li> */}

// After (uncommented):
<li><Link to="/team" className="text-white/70 hover:text-white transition-colors">Our Team</Link></li>
```

## Result
The "Company" section in the footer will display:
- Our Team (links to /team)
- Contact (links to /contact)
