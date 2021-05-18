if ('') console.log('OK!1'); // Falsy
if ('hello') console.log('OK!2'); // Truthy
if (undefined) console.log('OK!3'); // Falsy
if (null) console.log('OK!4'); // Falsy
if (333) console.log('OK!5'); // Truthy
if (NaN) console.log('OK!6'); // Falsy
if (0) console.log('OK!7'); // Falsy
if ([1, 2, 3]) console.log('OK!8'); // Truthy