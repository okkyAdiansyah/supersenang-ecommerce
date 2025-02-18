import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNav from "./MobileNav";

jest.mock("../../elements/Toggle/NavToggle/NavToggle", () => jest.fn(
    ({onClick}) => <button type="button" onClick={onClick} data-testid="nav-toggle"></button>
));

jest.mock("../Navlist/Navlist", () => jest.fn(
    ({className}) => <div data-testid="nav-list" className={className}></div>
))

describe("<MobileNav />", () => {
    const setup = () => {
        const utils = render(<MobileNav />);
        
        return {
            ...utils,
            navToggle: screen.getByTestId("nav-toggle"),
            navListContainer: screen.getByTestId("nav-list")
        }
    };

    describe("Render Component", () => {
        test("Render nav toggle button", () => {
            const { navToggle } = setup();
            expect(navToggle).toBeInTheDocument();
        });

        test("Render mobile nav container", () => {
            const { navListContainer } = setup();
            expect(navListContainer).toBeInTheDocument();
        });

        test("Render mobile nav container should hide from viewport", () => {
            const { navListContainer } = setup();
            expect(navListContainer).not.toHaveClass("isActive");
        });
    })

    describe("Component Act", () => {
        test("Mobile nav show in viewport when toggle is clicked", () => {
            const { navToggle, navListContainer } = setup();

            fireEvent.click(navToggle);

            expect(navListContainer).toHaveClass("isActive");
        });

        test("Mobile nav hide from viewport when toggle is clicked twice", () => {
            const { navToggle, navListContainer } = setup();

            fireEvent.click(navToggle);
            fireEvent.click(navToggle);

            expect(navListContainer).not.toHaveClass("isActive");
        })
    })
})