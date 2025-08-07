import React from "react";
import { render, screen } from "@testing-library/react";
import FaqContent from "../index";
import "@testing-library/jest-dom";

const mockFaqContent = {
  title: {
    pl: "Nagłówek PL",
    en: "Header EN",
  },
  description: {
    pl: "Opis PL",
    en: "Description EN",
  },
  content: [
    {
      title: {
        pl: "Title PL 1",
        en: "Title EN 1",
      },
      description: {
        pl: "description PL 1",
        en: "description EN 1",
      },
    },
    {
      title: {
        pl: "Title PL 2",
        en: "Title EN 2",
      },
      description: {
        pl: "description PL 2",
        en: "description EN 2",
      },
    },
  ],
};

const mockUseContextState = jest.fn();

jest.mock("../../../contexted", () => ({
  useContextState: () => mockUseContextState(),
  AppCtx: {},
}));

jest.mock("../../FaqTab/index", () => ({
  __esModule: true,
  default: ({ tab }: any) => <div data-testid="faq-tab">{tab.title.pl}</div>,
}));

jest.mock("../styles", () => ({
  FaqContentWrapper: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
  Title: ({ children }: any) => <h2>{children}</h2>,
}));

describe("FaqContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays the title in Polish", () => {
    mockUseContextState.mockReturnValue({ language: "pl" });

    render(<FaqContent faqContent={mockFaqContent} index={0} />);

    expect(
      screen.getByRole("heading", { name: "Nagłówek PL" })
    ).toBeInTheDocument();
  });
  test("wyśdisplays the title in English", () => {
    mockUseContextState.mockReturnValue({ language: "en" });

    render(<FaqContent faqContent={mockFaqContent} index={0} />);

    expect(
      screen.getByRole("heading", { name: "Header EN" })
    ).toBeInTheDocument();
  });

  test("renders the correct number of FaqTab components", () => {
    render(<FaqContent faqContent={mockFaqContent} index={1} />);

    const tabs = screen.getAllByTestId("faq-tab");
    expect(tabs.length).toBe(2);
    expect(tabs[0]).toHaveTextContent("Title PL 1");
    expect(tabs[1]).toHaveTextContent("Title PL 2");
  });
});
