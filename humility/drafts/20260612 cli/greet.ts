import { parse } from './cli';

const greet = {
  name: 'greeter',
  description: 'An advanced greeting utility for production environments',
  version: '2.0.0',
  options: [
    { flags: '-q, --quiet', description: 'Suppress all console logs except errors', default: false }
  ],
  commands: [
    {
      name: 'person <name>',
      description: 'Greet an individual person with customized styles',
      options: [
        { flags: '-t, --title <type>', description: 'Professional title prefix', default: 'Mr./Ms.' },
        { flags: '-l, --lang <code|name>', description: 'Language selection', default: 'en' },
        { flags: '-s, --style <type>', description: 'Text presentation style', choices: ['normal', 'uppercase', 'lowercase'], default: 'normal' }
      ],
      action: (name, options) => {
        let greeting = 'Hello';

        if (options.lang === 'es') greeting = 'Hola';
        if (options.lang === 'fr') greeting = 'Bonjour';

        let message = `${greeting}, ${options.title} ${name}.`;

        if (options.style === 'uppercase') message = message.toUpperCase();
        if (options.style === 'lowercase') message = message.toLowerCase();

        console.log(message);
      }
    },
    {
      name: 'team',
      description: 'Greet the entire development team',
      options: [
        { flags: '-i, --iterations <number>', description: 'Number of times to print the cheer', default: 1 }
      ],
      action: (options) => {
        const company = process.env.COMPANY_NAME || 'Acme Corp';

        for (let i = 0; i < options.iterations; i++) {
          console.log(`Go team ${company}! 🎉`);
        }
      }
    }
  ]
};

parse(greet, process.argv);