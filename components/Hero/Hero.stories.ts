import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Hero from "./Hero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Paragraphs/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    title: "Hero Title",
    subtitle: "Hero Subtitle",
    imgSrc: "https://picsum.photos/id/300/1920/1024",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const NoLogo: Story = {
  args: {
    showLogo: false,
  },
};
