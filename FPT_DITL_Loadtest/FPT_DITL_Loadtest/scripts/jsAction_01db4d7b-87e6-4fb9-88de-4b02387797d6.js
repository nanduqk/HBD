var myVar = context.variableManager.getValue("status");
if (myVar !=200) {
        context.fail("Status other than 200 Status=" +myVar);
      //  logger.debug("Status="+myVar);
}

logger.debug("Status="+myVar);