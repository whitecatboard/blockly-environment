var MSG = {
  title: "Code",
  blocks: "Blocks",
  linkTooltip: "Save and link to blocks.",
  runTooltip: "Run the program defined by the blocks in the workspace.",
  badCode: "Program error:\n%1",
  timeout: "Maximum execution iterations exceeded.",
  trashTooltip: "Discard all blocks.",
  catLogic: "Logic",
  catLoops: "Loops",
  catMath: "Math",
  catText: "Text",
  catLists: "Lists",
  catColour: "Colour",
  catVariables: "Variables",
  catFunctions: "Functions",
  listVariable: "list",
  textVariable: "text",
  httpRequestError: "There was a problem with the request.",
  linkAlert: "Share your blocks with this link:\n\n%1",
  hashError: "Sorry, '%1' doesn't correspond with any saved program.",
  xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
  badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML.",

  // WHITECAT
  catIO: "Input / Output",
  catIODigital: 'Digital',
  catIOAnalog: 'Analog',
  catIOPwm: 'PWM',
  catControl: "Control",
  catExceptions: "Exceptions",
  catThreads: "Threads",
  catSensor: "Sensors",	
  editor: "Lua",
  board: "Board",
  console: "Console",
  status: "Status",
  fileSystem: "File System",
  boardConnected: "Board connected",
  boardDisconnected: "Board disconnected",
  information: "Information",
  sendingCode: "Sending code ...",
  retrievingDirectory: "Retrieving diectory ...",
  downloadingFile: "Downloading file",
  sendingFile: "Sending file",
  DELETE_EDIT_CODE: "Delete current code?",
  boardInBootloaderMode: 'Your board is in bootloader mode and has not a firmware yet. Do you want to install the firmware now?',
  installNow: 'Yes, install now',
  notNow: 'Not now',	
  firmwareUpgraded: 'Firmware upgraded',
  downloadingFirmware: 'Downloafing firmware',
  rebooting: 'Rebooting ...',
  newFirmware: 'A new firmware version is available for your board. Do you want to upgrade?',
  firmwareNoNewVersion: 'No new version available. Your board is up to date.',
  boardBadFirmwareTitle: 'Bad firmware',
  boardBadFirmware: 'It seems that your board has not a valid firmware, or firmware is corrupted.<br><br>' +
					'If you want to try to recover your board, follow this instructions:<br><br>' +
					'1) Click on the recover button<br>' +
		 		    '2) Unplug your board and plug again in the next 20 seconds<br><br>' +
					'Do you want to try to recover your board?.',
  recover: 'Recover',
  cancel: 'Cancel',
  recovering: 'Recovering ...',
  warning: "Warning",
  switchToCodeWarning: "You are going to change your programming model. Your block's workspace will be deleted. You can restore it later if you decide to switch to blocks. Continnue?.",
  switchToBlocksWarning: "You are going to change your programming model. Your Lua code will be deleted. You can restore it later if you decide to switch to Lua. Continnue?.",
  yes: 'Yes',
  no: 'No', 
  waitingForBoard: 'Waiting for board ...',
  target: 'Target: ',
  loadBlockTitle: 'Please, select a file to load ...',
  loadFromDesktop: 'Load from computer ...',
  saveBlockTitle: 'Please, select file or folder for save in ...',
  saveToBoard: 'Save to board',
  save: 'Save',
  saveToDesktop: 'Save to computer ...',
  saveAs: 'Save As: ',
  noTarget: 'Please, select target file for run this ',
  run: 'Run',
  catComm: "Communications",
  catI2C: "I2C",
  catCan: "CAN",
  runtimeError: "Runtime error",
  ok: "Ok",
  youHaveAnError: "You have an error in your code:",
  value: 'value',
  catLora: "LoRa",
  catLoraOTAA: "OTAA",
  catLoraABP: "ABP",
  catDelays: "Delays",
  catEvents: "Events",
  item: "Item",
  value: "Value",
  installedFirmware: "Installed firmware",
  cpuModel: "CPU model",
  checkForFirmwareUpdates: "Check for firmware updates ...",
  switchToBlocksTooltip: 'Switch to blocks',
  switchToCodeTooltip: 'Switch to Lua',
  loadButtonTooltip: 'Load program',
  saveButtonTooltip: 'Save program', 
  saveAsButtonTooltip: 'Save program as ...',
  rebootButtonTooltip: 'Reboot board',
  stopButtonTooltip: 'Stop the program',
  error: 'Error',
  youHaveAnErrorInSettings: 'You have an eror in your settings.json file:',
  youHaveAnErrorInFile: 'You have an error in file  ',
  missingAdapterId: 'Missing id property',
  missingAdapterPlatform: "Missing info for platform ",
  missingAdapterPath: "Missing path property for platform ",
  missingAdapterDisplayName: "Missing displayName property for platform ",
  missingBoardId: 'Missing id property',
  catOperators: "Operators",
  catOperatorsNumeric: "Numbers",
  catOperatorsLogic: "Logic",
  catOperatorsText: "Text",
  catActuators: "Actuators",
  catServo: "Servo",
  catTFT: "TFT Display",
  catWIFI: "Wi-Fi",
  catNET: "Network",
  catMQTT: "MQTT",
  attachBoardForUseThisOption: "Please, attach a board for use this option.",
  alert: "Alert",
  connectABoard: "Connect a board",
  pleaseUpgradeAgent: "A new version of The Whitecat Create Agent is available. Please, upgrade it to ensure the correct operation of The Whitecat IDE. <br><br><button type=\"button\" class=\"btn btn-success btn-alert-instructions\" data-url=\"https://whitecatboard.org/git/wiki/whitecat-create-agent/How-to-update\">Open upgrade instructions ...</button>",
  thisFuntionRequiresUpdateAgent: "This function requires to update The Whitecat Create Agent. <br><br><button type=\"button\" class=\"btn btn-success btn-alert-instructions\" data-url=\"https://whitecatboard.org/git/wiki/whitecat-create-agent/How-to-update\">Open upgrade instructions ...</button>"
};
