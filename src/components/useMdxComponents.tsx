import React, { useMemo } from "react";
import { Link } from "gatsby-theme-material-ui";
import CodeBlock from './CodeBlock';
import { Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow, useTheme } from "@material-ui/core";
import RandomGenerator from "./RandomGenerator"
import DeviceSpecificationList from "./DeviceSpecificationList"
import TraceList from "./TraceList";
import SpecificationUnitList from "./SpecificationUnitList";
import StatusLEDAnimation from "./StatusLEDAnimation";

export default function useMdxComponents() {
  const theme = useTheme();
  const mdxComponents: any = useMemo(() => ({
    Link: (props: any) => <Link color="textPrimary" {...props} />,
    a: (props: { href: string }) => <Link color="textPrimary" {...props} rel="noopener noreferrer" />,
    pre: props => <Box mb={theme.spacing(0.5)}><Paper>
      <div {...props} />
    </Paper></Box>,
    code: CodeBlock,
    table: props => <Box mb={theme.spacing(0.5)}><TableContainer component={Paper}>
      <Box m={theme.spacing(0.5)}>
        <Table size="small" {...props} />
      </Box>
    </TableContainer></Box>,
    thead: props => <TableHead {...props} />,
    tbody: props => <TableBody {...props} />,
    tr: props => <TableRow {...props} />,
    RandomGenerator: props => <Box displayPrint="none"><RandomGenerator {...props} /></Box>,
    DeviceSpecificationList: props => <DeviceSpecificationList {...props} />,
    TraceList: props => <TraceList {...props} />,
    SpecificationUnitList: props => <SpecificationUnitList {...props} />,
    StatusLEDAnimation: props => <StatusLEDAnimation {...props} />,
  }), []);

  return mdxComponents;
}