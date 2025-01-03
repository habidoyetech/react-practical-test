

export const formatPhoneNumber = (phoneNumber) => {
    // Remove extension and all non-numeric characters
    const cleaned = phoneNumber.split('x')[0].replace(/\D/g, '');
    
    const countryCodes = {
      '1': 'US/CA',
      '44': 'UK',
      '86': 'CN',
      '91': 'IN',
      '81': 'JP',
      '49': 'DE',
      '33': 'FR',
      '39': 'IT',
      '7': 'RU',
      '82': 'KR',
      '34': 'ES',
      '55': 'BR',
      '52': 'MX',
      '61': 'AU',
      '31': 'NL',
      '64': 'NZ',
      '27': 'ZA',
      '46': 'SE',
      '41': 'CH',
      '45': 'DK',
      '47': 'NO',
      '43': 'AT',
      '32': 'BE',
      '65': 'SG',
      '66': 'TH',
      '48': 'PL',
      '351': 'PT',
      '972': 'IL',
      '20': 'EG',
      '971': 'AE',
      '92': 'PK',
      '84': 'VN',
      '62': 'ID',
      '60': 'MY',
      '63': 'PH',
      '90': 'TR',
      '54': 'AR',
      '56': 'CL',
      '57': 'CO',
      '58': 'VE'
    };
    
    let countryCode = '1';
    let remaining = cleaned;
    
    for (const [code] of Object.entries(countryCodes)) {
      if (cleaned.startsWith(code)) {
        countryCode = code;
        remaining = cleaned.slice(code.length);
        break;
      }
    }
    
    const formatted = remaining.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    return `+${countryCode} ${formatted}`;
  };
  
  // Example usage:
  console.log(formatPhoneNumber('010-692-6593 x09125')); // Output: "+1 010-692-6593"
  console.log(formatPhoneNumber('447911123456'));        // Output: "+44 791-112-3456"