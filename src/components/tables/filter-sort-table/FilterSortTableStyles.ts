import makeStyles from "@material-ui/core/styles/makeStyles";

export const useFilterSortTableStyles = makeStyles(theme => ({
    tableWrapper: {
        position: 'relative',
    },
    table: {
        minWidth: 650,
    },
    loading: {
        position: 'absolute',
        top: '49px',
        left: '0',
        right: '0',
        bottom: '56px',
        background: 'radial-gradient(circle, rgba(0,0,0,0.50) 0%, rgba(156,156,156,0.3) 100%)',
    }
}));
