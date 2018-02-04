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
namespace Magevoice\SearchByVoice\Model\Config\Source;

class DeviceScope implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 'desktop', 'label' => __('Desktop')],
            ['value' => 'mobile', 'label' => __('Mobile')],
            ['value' => 'both', 'label' => __('Both: desktop & mobile')],
        ];
    }
}