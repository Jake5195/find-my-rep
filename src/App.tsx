import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, createTheme, CssBaseline, Divider, Paper, Snackbar, ThemeProvider, Typography } from '@mui/material';
import RepresentativeForm from './components/RepresentativeForm';
import { RepresentativeList } from './components/RepresentativeList';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@mui/styles';
import RepresentativeDetails from './components/RepresentativeDetails';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import { RepresentativeStore } from './store/reducers/representatives';

function App() {
	const responsiveFontSize = 11;
	const theme = createTheme({
		typography: {
			fontFamily: ['Poppins', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
			fontSize: responsiveFontSize > 11 ? 11 : responsiveFontSize,
		},
		palette: {
			background: {
				default: '#eaeaea',
				paper: 'white',
			},
			primary: {
				main: '#192a51',
				contrastText: '#FFFFFF',
			},
			secondary: {
				main: '#ff676f',
			},
			success: {
				main: '#AFECDA',
			},
			error: {
				main: '#FF676F',
			},
			info: {
				main: '#7494EA',
			},
			warning: {
				main: '#c89933',
			},
		},
	});
	const useStyles = makeStyles({
		success: {
			backgroundColor: `${theme.palette.success.dark} !important`,
		},
		error: {
			backgroundColor: `${theme.palette.error.dark} !important`,
		},
		warning: {
			backgroundColor: `${theme.palette.warning.dark} !important`,
		},
		info: {
			backgroundColor: `${theme.palette.info.dark} !important`,
		},
	});
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider
					classes={{
						variantSuccess: classes.success,
						variantError: classes.error,
						variantWarning: classes.warning,
						variantInfo: classes.info,
					}}
					maxSnack={2}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
				>
					<Snackbar />

					<Box p={2} sx={{ backgroundColor: theme.palette.primary.main }}>
						<Typography variant='h4' color={theme.palette.primary.contrastText}>
							Who's My Representative?
						</Typography>
					</Box>
					<Divider />
					<Box p={2}>
						<Box mb={2}>
							<RepresentativeForm />
						</Box>
						<Box display='flex' justifyContent={'space-between'}>
							<Box width='55%'>
								<RepresentativeList />
							</Box>
							<Box width='43%'>
								<RepresentativeDetails />
							</Box>
						</Box>
					</Box>
				</SnackbarProvider>
			</ThemeProvider>
		</>
	);
}

export default App;

// create the formik component for the input values
// on submit render the list component
// have a list that will have an icon to view more detail information on the candidate
// this will either be a modal or render on the side of the list... tbd... but probably modal
