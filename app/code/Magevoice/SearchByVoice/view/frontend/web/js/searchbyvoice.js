define([
        'jquery'
    ], function($) {
		
		'use strict';
		
		console.log("SearchByVoice: Script is loaded!! Is enabled? "+window.searchbyvoice_enabled);
		
		var protocol = location.protocol === 'https:' ? 'https' : 'http';
		
		if(iOS() == false)
		{
			console.log("SearchByVoice: iOS NOT detected!");
			
			if(window.searchbyvoice_enabled && protocol == 'https')
			{
				console.log("SearchByVoice: HTTPS Enabled!!");
				
				if($("#"+window.searchbyvoice_search_id).length)
				{
					console.log("SearchByVoice: Search input found!");
					
					//$(".searchbyvoice-trigger").hide();
					
					$(".searchbyvoice-trigger").on('click touch', function () {
						$(".searchbyvoice-trigger").removeClass('searchbyvoice_mic').addClass('searchbyvoice_mic_on');
						$("#"+window.searchbyvoice_search_id).val('');
						$("#"+window.searchbyvoice_search_id).attr("placeholder", "Listening...");
						startDictation();
					});

					if(isMobileDevice() == true && (window.searchbyvoice_device_scope == 'mobile' || window.searchbyvoice_device_scope == 'both'))
					{
						console.log("SearchByVoice: Mobile detected and Mobile or both-devices assigned.");
						$("#searchbyvoice-trigger-mobile").show();
						if(window.searchbyvoice_device_scope != 'both')
							$("#searchbyvoice-trigger-tablet-desktop").hide();
					}
					else if(isMobileDevice() == false && (window.searchbyvoice_device_scope == 'desktop' || window.searchbyvoice_device_scope == 'both'))
					{
						console.log("SearchByVoice: Desktop detected and desktop or both-devices assigned.");
						$("#searchbyvoice-trigger-tablet-desktop").show();
						if(window.searchbyvoice_device_scope != 'both')
							$("#searchbyvoice-trigger-mobile").hide();
					}
					else
					{
						console.log("SearchByVoice: Unknown device/config-device detection. Device configured: "+window.searchbyvoice_device_scope+" Is Mobile: "+isMobileDevice());
						$(".searchbyvoice-trigger").hide();
					}		
				}
				else
				{
					console.log("SearchByVoice: Search input NOT found!");
				}
			}
			else
			{
				console.log("SearchByVoice: HTTPS NOT detected. SearchByVoice requires HTTPS!!");
			}
		}
		else
		{
			console.log("SearchByVoice: iOS detected, SearchByVoice does NOT work in iOS!!");
		}
		

		//--> Functions Segment:
		
		/**
		 * Function which detects and active the searching by voice.
		 * @return none
		 */
		function startDictation(class_name_mic_on,class_name_mic_off)
		{
			if (window.hasOwnProperty('webkitSpeechRecognition'))
			{
				var recognition = new webkitSpeechRecognition();

				recognition.continuous = true;
				recognition.interimResults = false;

				recognition.lang = window.searchbyvoice_voice_language;
				recognition.start();

				recognition.onresult = function(e) 
				{
					document.getElementById(window.searchbyvoice_search_id).value = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');//e.results[0][0].transcript;
					recognition.stop();
					/* Doofinder alternative - Deprecated for now.
					window.location.hash = "#/dfclassic/query="+encodeURIComponent(e.results[0][0].transcript)+"&query_name=match_or";//match_and
					window.location.reload()
					*/
					if(window.searchbyvoice_doofinder_enabled==1)
					{
						dfClassicLayers[0].layer.controller.search(document.getElementById('search').value);
						$("#searchByVoice").removeClass(class_name_mic_on).addClass(class_name_mic_off);
					}
					else
						document.getElementById('search_mini_form').submit();
				};

				recognition.onerror = function(e) {
					recognition.stop();
				}

			}
			else
			{
				console.log('SearchByVoice: Speech Recognition is not supported in your browser or it has been disabled.');
			}
		}
		
		/**
		 * Detects if the user-device is mobile.
		 * @return bool
		 */
		function isMobileDevice()
		{
			var testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
		  
			if (testExp.test(navigator.userAgent))
				return true;
			else
				return false;
		}
		
		/**
		 * Detects if the user-device is iOS.
		 * @return bool
		 */		
		function iOS() 
		{
			var iDevices = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'];
			var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
			
			if (!!navigator.platform) 
			{
				while (iDevices.length) 
				{
					if (navigator.platform === iDevices.pop())
					{ 
						return true; 
					}
				}
			}

			if(isSafari)
			{
				return true;
			}
			
			return false;
		}		
	
    }(jQuery)
);