import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component: "Primitive table markup for dense clinical and operational data.",
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>MRN</TableHead>
          <TableHead>Patient</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>MRN-28491</TableCell>
          <TableCell>Elena Morales</TableCell>
          <TableCell>Scheduled</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MRN-28492</TableCell>
          <TableCell>Carlos Ruiz</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>MRN</TableHead>
          <TableHead>Patient</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>MRN-28491</TableCell>
          <TableCell>Elena Morales</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCaptionAndFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Active studies this week</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Study</TableHead>
          <TableHead>Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>MRI Brain</TableCell>
          <TableCell>12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CT Chest</TableCell>
          <TableCell>8</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
