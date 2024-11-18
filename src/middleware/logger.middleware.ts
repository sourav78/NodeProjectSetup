import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;
import morgan from "morgan";
import { Request } from "express";

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
export const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    // new transports.File({ filename: "app.log" }), //If you want a log file (uncomment this)
  ],
});


// Custom Morgan token to extract IP address
morgan.token("ip", (req:Request) => req.socket.remoteAddress || "unknown");

// Morgan format including IP address
const morganFormat = ":method :url :status :response-time ms :ip";

export const loggerMessage = morgan(morganFormat, {
  stream: {
    write: (message) => {
      // Splitting based on spaces and IP is at the last position
      const parts = message.trim().split(" ");
      const logObject = {
        method: parts[0],
        url: parts[1],
        status: parts[2],
        responseTime: parts[3],
        ipAddress: parts[5], // IP at the last position
      };
      logger.info(JSON.stringify(logObject));
    },
  },
})