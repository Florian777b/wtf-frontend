import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    card: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    },
    map: {
        margin: theme.spacing(3),
    },
    mainForm: {
    },
    inputField:{
        width: "300px",
    },
    submitForm: {
        // width: "300px"
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", //Fix IE 11 issue.
        marginTop: theme.spacing(3, 0, 2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
    // error: {
    //     color: red
    // }
}));

export default useStyles;
