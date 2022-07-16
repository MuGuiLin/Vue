import { http } from "@/utils";
import { ContentTypeEnum } from "@/enums/httpEnum";

interface ILoginParams {
    username: string;
    password: string;
}

enum Api {

    RECORD = `records/getRechargeRecord`
}


export function loginApi(data?: ILoginParams): Promise<any> {
    return http({
        method: 'POST',
        // url: Api.LOGIN,
        data: data || null,
        // headers: { "Content-Type": ContentTypeEnum.FORM_DATA },
    });
}


export function getRecordApi(params?: any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.RECORD,
        params,
        headers: {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2LWFwaS54aGJpZ2RhdGEuY29tL2FwaS92MS9wdWJsaWMvd2VjaGF0T0F1dGhMb2dpbiIsImlhdCI6MTY1Nzk3MTg4OSwiZXhwIjoxNjU3OTc5MDg5LCJuYmYiOjE2NTc5NzE4ODksImp0aSI6IjJ4SElNWFVKMlJlUHIxVmMiLCJzdWIiOiI2MmNiZTlmNGY5NDE0ZmI0MGYwNzc5MzAiLCJwcnYiOiI0MDA2YzAwNmNhY2E2ZjhiY2I3NjIwNmQ4YTRmNWVjMDBiZWQzMzFlIn0.8pw04oAptWTIzEeY4ebMNRe68sJS7q4Obkx0mgtcfJo"
        },
    });
}


