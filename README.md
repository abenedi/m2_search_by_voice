# m2_search_by_voice

Approaching in the functionality of searching by voice in Magento 2 (basic)

# Short Description

This is an approach in the functionality of searching by voice. Here you have a Magento Module for 'playing' with a very first (Alpha) version. ;-)

I used the HTML5 Web Speech API: https://ctrlq.org/code/19680-html5-web-speech-api

iOS not support this API for now. But there's a "Global Usage" of 60% and 73% in Spain (source: https://caniuse.com/#feat=speech-recognition )

# Install

Dowload the repository and upload the folder&files to yout Magento-Installation root path.

	Resgiter the Module, Upgrade and Compile.
	
		php bin/magento module:enable Magevoice_SearchByVoice
		
		php bin/magento setup:upgrade
		
		php bin/magento setup:di:compile
    
	Clean Cache and Deploy the statics.
	
		php bin/magento cache:clean
		
		php bin/magento cache:flush
		
		php bin/magento setup:static-content:deploy
    

# Live Demos: (American English configured)

Magento 2 Standard Search Integration: https://searchbyvoice.aureliobenedi.com/
Magento 2 Doofinder Search Integration: https://searchbyvoice.aureliobenedi.com/doofinder/

# [Features 1.0] V.alpha 1.0

	Enable/Disable Search by Voice Recognition
	Devices Scope (desktop or mobile or both: desktop & mobile)
	Input Seach-Id (dom) Configurable.
	Voice Languages Recognition: Spanish and English
	Doonfinder® [Beta] Compatible

# [Software Requeriments]
	
	*Magento 2.1.x, 2.2.x
	*SSL installed in Server is mandatory

# [Backend Options] 

Stores > Configuration > Magevoive Tools > Search By Voice

	Enable Search by Voice Recognition
	Devices Scope (desktop | mobile | both: desktop & mobile)
	Input Seach Id: (input field. By default: search)
	Voice Language (Idioms Dropdown Menu)
	
	Doonfinder® [Beta] Compatible: enabled / disabled
		[i] enable only if you already have installed the latest Doofinder Extention (v.6)
