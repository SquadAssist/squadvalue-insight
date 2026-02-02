
# Updated Contact Page with Dual Options

## Overview
Redesign the Contact page to prioritize "Book a Meeting" as the primary call-to-action while keeping the email form as a secondary option for users who prefer written communication.

## Layout Structure

The page will feature a two-option layout:

```text
+------------------------------------------+
|           Header (unchanged)              |
+------------------------------------------+
|                                          |
|  +------------------------------------+  |
|  |     PRIMARY: Book a Meeting        |  |
|  |                                    |  |
|  |  "Schedule a call with our team"   |  |
|  |                                    |  |
|  |  [  Book a Meeting Button  ]       |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |    SECONDARY: Send a Message       |  |
|  |                                    |  |
|  |  "Prefer email? Send us a message" |  |
|  |                                    |  |
|  |  [Name] [Email] [Message]          |  |
|  |  [  Send Message Button  ]         |  |
|  +------------------------------------+  |
|                                          |
|  Contact info: email, location           |
+------------------------------------------+
```

## Changes to Make

### 1. Restructure the Content Card
- Add a prominent "Book a Meeting" section at the top with:
  - Heading: "Schedule a Call"
  - Brief description encouraging direct conversation
  - Large primary button linking to Lemcal
  
- Add a visual divider with "or" text

- Keep the email form below as secondary option with:
  - Heading: "Prefer Email?"
  - Slightly smaller/subdued styling
  - Existing form functionality preserved

### 2. Visual Hierarchy
- "Book a Meeting" button: Full-width, primary styling (dark background)
- "Send Message" button: Outline or secondary variant (less prominent)
- Use subtle background colors or spacing to differentiate sections

### 3. Keep Existing Functionality
- All EmailJS logic stays intact
- Form validation continues to work
- Toast notifications remain
- Contact details (email, location) kept at the bottom

---

## Technical Details

**File to modify:** `src/pages/Contact.tsx`

**New imports:**
- Add `Calendar` icon from lucide-react

**JSX changes:**
- Restructure the main content card to have two sections
- Add "Book a Meeting" section above the form
- Add an "or" divider between sections
- Style the form section as secondary option
- Update button styling (form button becomes outline variant)

**No code removal needed** - the existing EmailJS functionality is preserved for users who prefer the email option.
