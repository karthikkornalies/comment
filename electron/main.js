//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

'use strict';

//
// ─── DEFS ───────────────────────────────────────────────────────────────────────
//

	const electron = require( 'electron' );
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;

//
// ─── GENERATE MAIN WINDOW ───────────────────────────────────────────────────────
//

	let mainWindow;

	function createWindow ( ) {
		const window_width = 1100;
		const window_height = 640;
		mainWindow = new BrowserWindow({
			width: window_width, 	minWidth: window_width - 140,
			height: window_height,	minHeight: window_height,
			backgroundColor: "black",
			show: false,
		});

		mainWindow.once('ready-to-show', () => {
            mainWindow.show()
        });

		mainWindow.loadURL( 'file://' + __dirname + '/index.html' );

		// mainWindow.webContents.openDevTools();

		mainWindow.on( 'closed' , function( ) {
			mainWindow = null;
			app.quit( );
		});
	}

//
// ─── ON READY ───────────────────────────────────────────────────────────────────
//

	app.on( 'ready' , createWindow );

// ────────────────────────────────────────────────────────────────────────────────

