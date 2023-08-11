"use client";

import getDestination, { DestinationType } from "@/utils/getDestination";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import DestinationMock from "../mocks/DestinationMock.json";

export interface DestinationPageContextType {
  destination: DestinationType | undefined;
  loadDestination: () => void;
  destinationID: number | undefined;
  setDestinationID: Dispatch<SetStateAction<number | undefined>>;
  mockDestination: boolean;
  loadingState: boolean;
}

export const DestinationPageContext = createContext(
  {} as DestinationPageContextType
);

export default function DestinationPageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [destination, setDestination] = useState<DestinationType | undefined>();
  const [destinationID, setDestinationID] = useState<number | undefined>();
  const [mockDestination, setMockDestination] = useState<boolean>(false);
  const [loadingState, setLoadingState] = useState<boolean>(false);

  async function loadDestination() {
    setLoadingState(true);
    if (!destinationID) {
      changeDestination(undefined, 1);
      return;
    }
    changeDestination(
      await getDestination(destinationID.toString()),
      destinationID
    );
  }

  function changeDestination(d: DestinationType | undefined, id: number) {
    if (!d) {
      setDestination(DestinationMock.list[id - 1]);
      setMockDestination(true);
      setLoadingState(false);
      return;
    }
    setDestination(d);
    setLoadingState(false);
  }
  return (
    <DestinationPageContext.Provider
      value={{
        destination,
        loadDestination,
        destinationID,
        setDestinationID,
        mockDestination,
        loadingState,
      }}
    >
      {children}
    </DestinationPageContext.Provider>
  );
}
