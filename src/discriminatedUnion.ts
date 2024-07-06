type SuccessPostApiResponse = {
  status: 'success';
  data: {
    id: string;
  };
};

type ErrorPostApiResponse = {
  status: 'error';
  message: string;
};

type PostApiResponse = SuccessPostApiResponse | ErrorPostApiResponse;

function handleApiResponse(res: PostApiResponse) {
  if (res.status === 'success') {
    console.log(res.data.id);
  } else {
    console.log(res.message);
  }
}
