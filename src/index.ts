import {SleepingContainer} from 'mcsleepingserverstarter/build/sleepingContainer';
import {getSettings} from 'mcsleepingserverstarter/build/sleepingSettings';

console.log('--- Client Start ---');

const settings = getSettings();
console.log('Client.Settings', settings);

const sleepingContainer = new SleepingContainer(settings);
sleepingContainer.init(true);

console.log('--- Client End ---');