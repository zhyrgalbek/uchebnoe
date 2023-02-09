import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import styled from "styled-components"

export const AccordionFilter = ({ children, header, none, ...props }) => {
    return <AccordionContainer sx={{ overflow: 'hidden', boxShadow: none && 'none' }}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            {...props}
        >
            {header}
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
    </AccordionContainer>
}

const AccordionContainer = styled(Accordion)`
    & .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root{
        padding: 0;
    }
    & .css-o4b71y-MuiAccordionSummary-content{
        margin: 0;
    }
    & .css-o4b71y-MuiAccordionSummary-content.Mui-expanded{
        margin: 0;
    }
    & .css-15v22id-MuiAccordionDetails-root{
        padding: 0;
    }
    & .css-1iji0d4{
        padding: 0;
    }
    & .css-u7qq7e{
        padding: 0;
    }
`