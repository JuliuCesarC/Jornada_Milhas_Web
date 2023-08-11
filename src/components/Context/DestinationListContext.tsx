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
import DestinationListMock from "../mocks/DestinationListMock.json";

export interface DestinationListContextType {
  destinationList: IDestinationList | undefined;
  changeDestinationList: (page: number, name?: string) => void;
  mockDestinationList: boolean;
  LoadingState: boolean;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  lastSearch: string;
  resetDestinationList: () => void;
}

export const DestinationListContext = createContext({} as DestinationListContextType);

export function DestinationListProvider({ children }: { children: ReactNode }) {
  const [destinationList, setDestinationList] = useState<IDestinationList>();
  const [mockDestinationList, setMockDestinationList] = useState(false);
  const [LoadingState, setLoadingState] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [lastSearch, setLastSearch] = useState<string>("");

  async function changeDestinationList(page: number, name?: string) {
    setLoadingState(true);
    if (name) {
      defineDestinationList(await getSearchDestination(page, name));
      setPageNumber(0);
      setLastSearch(name);
      return;
    }
    if (lastSearch) {
      defineDestinationList(await getSearchDestination(page, lastSearch));
      return;
    }
    defineDestinationList(await getDestinationList(page));
  }

  function defineDestinationList(list: IDestinationList) {
    if (!list) {
      defineDestinationList(DestinationListMock);
      setMockDestinationList(true)
      setLoadingState(false);
      return;
    }
    setDestinationList(list);
    setMockDestinationList(false)
    setLoadingState(false);
  }
  async function resetDestinationList() {
    defineDestinationList(await getDestinationList(0))
    setLastSearch("");
    setPageNumber(0);
  }
  return (
    <DestinationListContext.Provider
      value={{
        destinationList,
        changeDestinationList,
        mockDestinationList,
        LoadingState,
        pageNumber,
        setPageNumber,
        lastSearch,
        resetDestinationList,
      }}
    >
      {children}
    </DestinationListContext.Provider>
  );
}
