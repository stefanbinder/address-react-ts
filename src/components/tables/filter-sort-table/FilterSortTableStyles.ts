import styled from "styled-components";
import Menu from "@material-ui/core/Menu/Menu";
import {Row} from "components/grid";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

export const TableWrapper = styled.div`
&& {
    width: 100%;
    position: relative;
    
    .filter-sort-table {
      min-width: 650px;
      
      .table-scrollable {
        width: 100%;
        overflow-x: scroll;
      }
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

export const TableHeadline = styled(Row)`
&& {
    background-color: #d6d6d6;
    padding-left: 8px;
}
`;

export const FilterMenu = styled(Menu)`
&& {
    padding: 10px;
}
`;
export const StyledFilterElement = styled.div`
&& {
    width: 100%;
    min-width: 180px;
    padding: 10px;
}
`;

export const BulkCheckbox = styled(Checkbox)`
&& {
  padding: 3px;
}
`;
