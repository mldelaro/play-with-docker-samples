package example.mldelaro.pwd.web.api.rest;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import javax.servlet.http.HttpServlet;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

@Path("/time")
public class TimeApi extends HttpServlet {
	private static final long serialVersionUID = -4186132502421307286L;
	private Logger logger = Logger.getLogger(TimeApi.class.getCanonicalName());

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/now")
	public Response getCurrentTime() {
		logger.debug("Did receive request for current time");
		TimeZone timeZone = TimeZone.getTimeZone("UTC");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		dateFormat.setTimeZone(timeZone);
		String currentTime = dateFormat.format(new Date());
		
		String stringResponse = "{\"time\": \"" + currentTime + "\"}";
		return Response.status(Response.Status.OK).entity(stringResponse).build();
	}
}