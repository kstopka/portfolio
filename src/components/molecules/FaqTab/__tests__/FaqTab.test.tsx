import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FaqTab from "..";
import "@testing-library/jest-dom";

const mockTab = {
  title: { pl: "Pytanie", en: "Question" },
  description: { pl: "Odpowiedź", en: "Answer" },
};

const mockUseContextState = jest.fn();

jest.mock("../../../contexted", () => ({
  useContextState: () => mockUseContextState(),
  AppCtx: {},
}));

jest.mock("../../../../assets/symbols", () => ({
  ArrowSVG: () => <svg data-testid="arrow-icon" />,
}));

jest.mock("../styles", () => ({
  FaqTabWrapper: ({ children }: any) => <div>{children}</div>,
  MainWrapper: ({ children, onClick }: any) => (
    <div onClick={onClick}>{children}</div>
  ),
  TitleWrapper: ({ children }: any) => <div>{children}</div>,
  Title: ({ children }: any) => <h3>{children}</h3>,
  SvgWrapper: ({ children }: any) => <div>{children}</div>,
  Description: ({ children }: any) => <p>{children}</p>,
}));

describe("FaqTab", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays the title and description (hidden initially)", () => {
    mockUseContextState.mockReturnValue({ language: "pl" });

    render(<FaqTab tab={mockTab} />);
    expect(screen.getByText("Pytanie")).toBeInTheDocument();
    expect(screen.getByText("Odpowiedź")).toBeInTheDocument();
  });

  test("shows the description after clicking", () => {
    mockUseContextState.mockReturnValue({ language: "pl" });

    render(<FaqTab tab={mockTab} />);
    fireEvent.click(screen.getByText("Pytanie"));
    expect(screen.getByText("Odpowiedź")).toBeInTheDocument();
  });

  test("verifies texts in English", () => {
    mockUseContextState.mockReturnValue({ language: "en" });

    render(<FaqTab tab={mockTab} />);
    expect(screen.getByText("Question")).toBeInTheDocument();
    expect(screen.getByText("Answer")).toBeInTheDocument();
  });
});
