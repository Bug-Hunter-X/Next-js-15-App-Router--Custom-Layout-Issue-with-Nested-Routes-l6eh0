# Next.js 15 App Router: Custom Layout Issue with Nested Routes

This repository demonstrates a bug in Next.js 15's App Router involving unexpected behavior when using a custom layout with nested routes.  The issue arises when attempting to render a layout for a specific route, but that layout fails to behave as expected due to a conflict with the nested route structure.

## Bug Description
When a custom layout is implemented, it's expected to apply its styling and structure to all routes within its scope. However, in this example, the nested route does not inherit the layout's properties correctly, resulting in an undesired rendering output.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the affected route and observe the incorrect rendering.

## Expected Behavior
The custom layout should correctly render its contents around the nested route's content. The expected behavior is to see the layout's styling consistently applied across the relevant paths.

## Actual Behavior
The custom layout does not apply its styles to the nested route correctly, leading to an inconsistent and unexpected visual output.

## Solution
This issue has been fixed by reorganizing the directory structure and adjusting the layout implementation to ensure correct path resolution and inheritance. The corrected implementation is available in the `bugSolution.js` file.
