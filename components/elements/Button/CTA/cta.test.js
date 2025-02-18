import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faker } from "@faker-js/faker/.";
import CTA from "./CTA";

describe("<Button.CTA />", () => {
    const setup = () => {
        const mockProps = {
            href: faker.internet.url(),
            callToAction: faker.word.verb()
        }

        const utils = render(<CTA href={mockProps.href} callToAction={mockProps.callToAction} />);

        return {
            ...utils,
            mockProps,
            CTA: screen.getByText(mockProps.callToAction)
        }
    };

    describe("Render Component", () => {
        const { mockProps, CTA } = setup();

        it("Render anchor element with correct href attribute", () => {
            expect(CTA).toHaveAttribute("href", mockProps.href);
        });

        it("Render anchor element with correct call-to-action content", () => {
            expect(CTA).toHaveTextContent(mockProps.callToAction);
        });
    });
})