import styled from "styled-components";

export const TableWrapper = styled.div`
&& {
    width: 100%;
    position: relative;
    
    .filter-sort-table {
      min-width: 650px;
    }
}
`;

export const TableLoadingOverlay = styled.div`
&& {
    position: absolute;
    top: 49px;
    left: 0;
    right: 0;
    bottom: 56px;
    background: radial-gradient(circle, rgba(0,0,0,0.50) 0%, rgba(156,156,156,0.3) 100%);
}
`;
