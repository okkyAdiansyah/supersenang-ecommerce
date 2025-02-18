import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faker } from "@faker-js/faker/.";
import NavList from "./NavList";

jest.mock("../../elements/NavItem/NavItem", () => jest.fn(
    ({href, route}) => <a href={href} data-testid="nav-item">{route}</a>
));

describe("<NavList />", () => {
    const setup = () => {
        let randomLength = faker.number.int({max: 10});
        let mockProps = Array.from({length: randomLength}).map(() => ({
            href: faker.internet.url(),
            route: faker.word.noun()
        }));

        const utils = render(<NavList navItems={mockProps} />);

        return {
            ...utils,
            mockProps,
            navItems: screen.getAllByTestId("nav-item")
        }
    };

    describe("Render Component", () => {
        test("Render correct amount of nav item", () => {
            const { mockProps, navItems } = setup();
            expect(navItems.length).toBe(mockProps.length);
        });

        test("Render correct href and route from props", () => {
            const { mockProps, navItems } = setup();
            mockProps.forEach((item, id) => {
                expect(navItems[id]).toHaveAttribute("href", item.href);
                expect(navItems[id]).toHaveTextContent(item.route);
            })
        });
    });
});