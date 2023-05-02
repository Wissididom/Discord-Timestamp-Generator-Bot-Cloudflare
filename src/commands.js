import {
  ApplicationCommandType,
  ApplicationCommandOptionType,
} from 'discord-interactions';

/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const TIMESTAMP_COMMAND = {
  name: 'timestamp',
  description: 'Generate Discord timestamps based on a given time and timezone',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'day',
      description: 'Day (1 - 31)',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'month',
      description: 'Month (1 - 12)',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'year',
      description: 'Year (min. 1970)',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'hour',
      description: 'Hour (0 - 23)',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'minute',
      description: 'Minute (0 - 59)',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'timezone',
      description: 'Timezone (Format: continent/city)',
      required: true,
      type: ApplicationCommandOptionType.String,
      autocomplete: true,
    },
    {
      name: 'second',
      description: 'Second (0 - 59)',
      required: false,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: 'public',
      description:
       'Should the response be visible to everyone? (Default: False)',
      required: false,
      type: ApplicationCommandOptionType.Boolean,
    },
  ],
};

export const CURRENT_TIMESTAMP_COMMAND = {
  name: 'currenttimestamp',
  description: 'Generate Discord timestamps based on the current time',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'public',
      description:
       'Should the response be visible to everyone? (Default: False)',
      required: false,
      type: ApplicationCommandOptionType.Boolean,
    },
  ],
};

export const INVITE_COMMAND = {
  name: 'invite',
  description: 'Get an invite link to add the integration to your server',
};
