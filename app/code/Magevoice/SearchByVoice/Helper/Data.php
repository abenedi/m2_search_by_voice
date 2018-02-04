<?php
/**
 * Magevoice_SearchByVoice is a Module for searching by voice)
 *
 * @category    Magevoice
 * @package     Magevoice_SearchByVoice
 * @author      Aurelio Benedí <abenedi@gmail.com>
 * @copyright   Magevoice (http://www.magevoice.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
namespace Magevoice\SearchByVoice\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Store\Model\ScopeInterface;

class Data extends AbstractHelper
{
	const XML_PATH_REDIRECTDISABLED = 'searchbyvoice/';

	public function getConfigValue($field, $storeId = null)
	{	
		return $this->scopeConfig->getValue(
			$field, ScopeInterface::SCOPE_STORE, $storeId
		);
	}
	
	public function getGeneralConfig($code, $storeId = null)
	{
		return $this->getConfigValue(self::XML_PATH_REDIRECTDISABLED .'general/'. $code, $storeId);
	}

}