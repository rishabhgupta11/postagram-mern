import { makeStyles } from '@material-ui/core/styles';
import { normalizeUnits } from 'moment';

export default makeStyles((theme) => ({
      appBar: {
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      },
      image: {
        marginLeft: '15px',
      },
      postBody: {
        backgroundColor: '#002457',
        paddingTop: '30px',
      },
      formGrid: {
        paddingTop: '8vh;',
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer: {
          flexDirection: "column",
        },
        About1: {
          fontSize: '40px !important',
        },
        desktopForm: {
          display: 'none',
        },
      },
      About1: {
        fontFamily: 'Exo',
        color: '#fff',
        fontSize: '50px',
        fontWeight: '600',
      },
      About2: {
        fontFamily: 'Exo',
        color: '#fff',
        fontWeight: '600',
      },
      [theme.breakpoints.up('sm')]:{
        mobileForm: {
          display: 'none',
        },
      },
}));