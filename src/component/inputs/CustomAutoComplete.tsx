import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

//  Props
export interface CustomAutoCompleteProps {
  value: any;
  suggestions: any[];
  placeholder?: string;
  field?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;

  /** Triggered when user types */
  onSearch: (query: string) => void;

  /** Triggered when value changes */
  onChange: (value: any) => void;

  /** Custom item template */
  itemTemplate?: (item: any) => React.ReactNode;

  /** Selected value template */
  selectedItemTemplate?: (item: any) => React.ReactNode;

  /** Footer template */
  footerTemplate?: () => React.ReactNode;
}

//  Component
export default function CustomAutoComplete({
  value,
  suggestions,
  placeholder,
  field = "name",
  disabled,
  // loading removed – AutoComplete does not support it,
  className,
  onSearch,
  onChange,
  itemTemplate,
  selectedItemTemplate,
  footerTemplate,
}: CustomAutoCompleteProps) {
  const [query, setQuery] = useState("");

  return (
    <div className={`w-full ${className || ""}`}>
      <AutoComplete
        value={value}
        suggestions={suggestions}
        completeMethod={(e) => {
          setQuery(e.query);
          onSearch(e.query);
        }}
        onChange={(e) => onChange(e.value)}
        placeholder={placeholder}
        field={field}
        itemTemplate={itemTemplate}
        selectedItemTemplate={selectedItemTemplate}
        panelFooterTemplate={footerTemplate}
        disabled={disabled}
        className="w-full"
      />
    </div>
  );
}
