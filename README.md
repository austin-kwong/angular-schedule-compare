# Overview

Allow users to upload their UBC course schedule and easily visualize it. Allows comparison with other UBC students to find when they both do not have courses.

Uses ng2 for front-end, with an express api.

## Visualize Schedule

-   Upload a UBC .ics file, and visualize it. Green labels indicate when they have a class
-   Select the time interval you want to display (24-hour clock)

## Compare Schedules

-   Uplaod two UBC .ics files and visualize the complement of the intersection. Green labels indicates when both people **do not** have courses
-   Select the time interval you want to display (24-hour clock)

## DialPadder

-   Input a string to get it's dial-pad equivalent. E.g. [ABC] map to 1
-   Palindromic diap-pad strings are highlighted in orange
-   Provides completion suggestions to make the input string so far become 'dial-pad palindromic' (orange highlight)