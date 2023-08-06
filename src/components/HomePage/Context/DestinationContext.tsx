"use client";

import getDestinationList, {
  IDestinationList,
} from "@/utils/getDestinationList";
import getSearchDestination from "@/utils/getSearchDestination";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface DestinationContextType {
  destinationList: IDestinationList | undefined;
  changeDestinationList: (page: number, name?: string) => void;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  lastSearch: string;
  resetDestinationList: () => void;
}

export const DestinationContext = createContext({} as DestinationContextType);

export function DestinationProvider({ children }: { children: ReactNode }) {
  const [destinationList, setDestinationList] = useState<IDestinationList>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [lastSearch, setLastSearch] = useState<string>("");

  async function changeDestinationList(page: number, name?: string) {
    if (name) {
      const dList = await getSearchDestination(page, name);
      setDestinationList(dList);
      setPageNumber(0);
      setLastSearch(name);
      return;
    }
    if (lastSearch) {
      const dList = await getSearchDestination(page, lastSearch);
      setDestinationList(dList);
      return;
    }
    const dList = await getDestinationList(page);
    setDestinationList(dList);
  }

  async function resetDestinationList() {
    setLastSearch("");
    const dList = await getDestinationList(0);
    setDestinationList(dList);
    setPageNumber(0);
  }
  return (
    <DestinationContext.Provider
      value={{
        destinationList,
        changeDestinationList,
        pageNumber,
        setPageNumber,
        lastSearch,
        resetDestinationList,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
}
