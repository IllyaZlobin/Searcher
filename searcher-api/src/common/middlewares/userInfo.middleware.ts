import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class UserInfoMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
      console.log('Request..')
      console.log(req.headers);
      next();    
    }
    
}