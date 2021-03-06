import { s__ } from '~/locale';

export const ALERTS_SEVERITY_LABELS = {
  CRITICAL: s__('AlertManagement|Critical'),
  HIGH: s__('AlertManagement|High'),
  MEDIUM: s__('AlertManagement|Medium'),
  LOW: s__('AlertManagement|Low'),
  INFO: s__('AlertManagement|Info'),
  UNKNOWN: s__('AlertManagement|Unknown'),
};

export const ALERTS_STATUS = {
  OPEN: 'OPEN',
  TRIGGERED: 'TRIGGERED',
  ACKNOWLEDGED: 'ACKNOWLEDGED',
  RESOLVED: 'RESOLVED',
  ALL: 'ALL',
};

export const ALERTS_STATUS_TABS = [
  {
    title: s__('AlertManagement|Open'),
    status: ALERTS_STATUS.OPEN,
    filters: [ALERTS_STATUS.TRIGGERED, ALERTS_STATUS.ACKNOWLEDGED],
  },
  {
    title: s__('AlertManagement|Triggered'),
    status: ALERTS_STATUS.TRIGGERED,
    filters: [ALERTS_STATUS.TRIGGERED],
  },
  {
    title: s__('AlertManagement|Acknowledged'),
    status: ALERTS_STATUS.ACKNOWLEDGED,
    filters: [ALERTS_STATUS.ACKNOWLEDGED],
  },
  {
    title: s__('AlertManagement|Resolved'),
    status: ALERTS_STATUS.RESOLVED,
    filters: [ALERTS_STATUS.RESOLVED],
  },
  {
    title: s__('AlertManagement|All alerts'),
    status: ALERTS_STATUS.ALL,
    filters: [ALERTS_STATUS.TRIGGERED, ALERTS_STATUS.ACKNOWLEDGED, ALERTS_STATUS.RESOLVED],
  },
];
