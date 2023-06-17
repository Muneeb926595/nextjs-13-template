import { Layout } from "./layout";

class _Constants {
  /**
   * Durations in millisecs
   */
  readonly duration = {
    extraShort: 250,
    short: 500,
    medium: 1000,
    long: 2000,
    extraLong: 6000,
  };

  readonly REGEX_EMAIL =
    /^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z0-9\-]{2,})+\s*$/;

  readonly DEFAULT_SCREEN_PADDING = Layout.medium;

  readonly DEPLOY_URL = ``;

  readonly DATE_MONTH_YEAR_FORMATE_DASHED = "DD-MM-YYYY";
  readonly DATE_MONTH_YEAR_FORMATE_SLASHED = "DD/MM/YYYY";

  readonly MINIMUM_VALID_DOB = new Date("1890-01-01T00:00:00");
  readonly CALENDAR_FUTURE_DAYS = 10;
  readonly MINIMUM_AGE_FOR_REGISTRATION = 18;

  readonly commaSeparator = ",";

  readonly DEBOUNCE_DELAY = 400;
  readonly MAX_TIME_ALLOW_TO_RESEND_OTP = 60; //in sconds;

  readonly MAXIMUM_OTP_CODE_LENGTH = 6;

  readonly DEFAULT_APP_LOCALE = "en-US";
}

export const Constants = new _Constants();
