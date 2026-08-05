"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/command";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

import {
  globalSearchBarContainerClassName,
  globalSearchBarIconClassName,
  globalSearchBarInputClassName,
  globalSearchBarShortcutClassName,
} from "./global-search-bar.styles";

export type GlobalSearchItem = {
  label: string;
  value: string;
  group?: string;
};

export type GlobalSearchBarProps = {
  placeholder?: string;
  items?: GlobalSearchItem[];
  onSelect?: (value: string) => void;
  /** Fires when the user submits the dialog search with Enter. */
  onSearch?: (query: string) => void;
  className?: string;
  dialogTitle?: string;
  dialogDescription?: string;
  emptyMessage?: string;
  shortcutEnabled?: boolean;
};

export function GlobalSearchBar({
  placeholder = "Search everything",
  items = [],
  onSelect,
  onSearch,
  className,
  dialogTitle = "Search",
  dialogDescription = "Search across the application",
  emptyMessage = "No results found.",
  shortcutEnabled = true,
}: GlobalSearchBarProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!shortcutEnabled) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [shortcutEnabled]);

  const groups = items.reduce<Record<string, GlobalSearchItem[]>>((acc, item) => {
    const group = item.group ?? "Results";
    acc[group] ??= [];
    acc[group].push(item);
    return acc;
  }, {});

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setSearchValue("");
    }
  }

  function submitSearch() {
    onSearch?.(searchValue);
    handleOpenChange(false);
  }

  return (
    <>
      <div className={cn(globalSearchBarContainerClassName, className)}>
        <SearchIcon className={globalSearchBarIconClassName} aria-hidden />
        <Input
          type="search"
          size="sm"
          readOnly
          placeholder={placeholder}
          aria-label={placeholder}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={globalSearchBarInputClassName}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setOpen(true)}
        />
        <CommandShortcut className={globalSearchBarShortcutClassName}>⌘K</CommandShortcut>
      </div>

      <CommandDialog
        open={open}
        onOpenChange={handleOpenChange}
        title={dialogTitle}
        description={dialogDescription}
        className="top-auto translate-y-0 overflow-hidden sm:max-w-lg"
      >
        <Command>
          <CommandInput
            placeholder={`${placeholder}…`}
            value={searchValue}
            onValueChange={setSearchValue}
            onKeyDown={(event) => {
              if (event.key === "Enter" && onSearch) {
                event.preventDefault();
                submitSearch();
              }
            }}
          />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {Object.entries(groups).map(([group, groupItems]) => (
              <CommandGroup key={group} heading={group}>
                {groupItems.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.label}
                    onSelect={() => {
                      handleOpenChange(false);
                      onSelect?.(item.value);
                    }}
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
