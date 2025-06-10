/**
 * filtersConfig.js
 *
 * This file provides a helper function to generate the configuration for all course filters
 * used in the application (such as area, type, level, certificate, and language).
 *
 * The function getFiltersConfig() dynamically extracts unique filter options from the CoursesData JSON,
 * ensuring that the filter UI always reflects the available data.
 *
 * Each filter configuration object includes:
 *   - section: the key in the filters state object
 *   - label: the display name for the filter group
 *   - type: the input type ("select" or "checkbox")
 *   - placeholder: (for selects) the placeholder text
 *   - options: an array of unique values for that filter, extracted from CoursesData
 *
 * The unique() helper ensures that only distinct, non-falsy values are included for each filter.
 * For the "certificate" filter, it transforms boolean values into "Yes"/"No" strings.
 *
 * This config is imported by filter UI components (e.g., FiltersPanel) to render the correct
 * filter controls and options, keeping the filter logic DRY and centralized.
 */

import CoursesData from "../database/CoursesData.json";

export function getFiltersConfig() {
  const unique = (key, transform) =>
    Array.from(
      new Set(
        CoursesData.map((c) => (transform ? transform(c[key]) : c[key])).filter(
          Boolean
        )
      )
    );

  return [
    {
      section: "area",
      label: "Area",
      type: "select",
      placeholder: "Select an area",
      options: unique("area"),
    },
    {
      section: "type",
      label: "Type",
      type: "checkbox",
      options: unique("type"),
    },
    {
      section: "level",
      label: "Level",
      type: "checkbox",
      options: unique("level"),
    },
    {
      section: "certificate",
      label: "Certificate",
      type: "checkbox",
      options: unique("certificate", (v) =>
        v !== undefined ? (v ? "Yes" : "No") : null
      ),
    },
    {
      section: "language",
      label: "Language",
      type: "checkbox",
      options: unique("language"),
    },
  ];
}
