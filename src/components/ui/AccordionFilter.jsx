import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { useEffect } from "react"
import styled from "styled-components"

export const AccordionFilter = ({ children, header, none, hidden, topFilter, ...props }) => {
    return <AccordionContainer sx={{ overflow: topFilter ? 'hidden' : 'visible', boxShadow: none && 'none', padding: '0', border: topFilter && '1px solid rgba(55, 99, 255, 0.4)' }}>
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
        padding-bottom: 10px;
        /* border: 1px solid red; */
    }
    & .css-1iji0d4{
        padding: 0px;
    }
    & .css-u7qq7e{
        padding: 0px;
    }
    & > div{
        min-height: 45px;
    }
    & > div.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded{
        min-height: 45px;
    }
`