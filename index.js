const express = require('express');
const app = express();
const port = 3000;

app.get('/keys', (req, res) => {
  res.json({
    "keys": [
      {
        "kid": "_v7he1A-6GAkEW9ALif2PwI_AEzlO03PXIqHihTCSq4",
        "kty": "EC",
        "alg": "ES256",
        "use": "sig",
        "crv": "P-256",
        "x": "wvBcozAvkdWCo3kHqgwQVuvcXZRjRXZxOl0M-Sm72N0",
        "y": "4FrRUvrJIeaNx42P-n_4hY8wAt2Av92UTAJrEZ9t1xw"
      },
      {
        "kid": "PYrbIBXyJdvdXTgOkzGfwBypIVbrrf00I3mQEJcHcV8",
        "kty": "RSA",
        "alg": "RSA-OAEP",
        "use": "enc",
        "n": "rg0QhzMTGxa4coL9mjymvN23yQTOFOPh_Ml3-kAhVw-7jqceh-AEKjBpGJQtWCMcfXdxZVfWwV9J_MoBppFalD_3UL1x65nCQUg2iJgiAJsxSML6imZQ4w9UfvzanxFB5NdVoQdv7BaieY-cvMrL_AHI88wIJSdskzNhVdDH2XPsihRLqHqm5lC6nH2oIqr4ak5TKRs9KEyOfAZfZpqoTp5ga8I3XxZH2wEv7yaf-iWcgxj7Yxrnog17IGFIykoFgAubzX1SfLrzolGH2NMS1kfdfnpX3ZUAPG_KY9eYGTZg2_xr17hUjdaNwCiHgOvD6ScnKTGJfZ9017um-0a48Q",
        "e": "AQAB",
        "x5c": [
          "MIIClTCCAX0CBgGUiau8DjANBgkqhkiG9w0BAQsFADAOMQwwCgYDVQQDDANBT0gwHhcNMjUwMTIxMTYyMDIwWhcNMzUwMTIxMTYyMjAwWjAOMQwwCgYDVQQDDANBT0gwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCuDRCHMxMbFrhygv2aPKa83bfJBM4U4+H8yXf6QCFXD7uOpx6H4AQqMGkYlC1YIxx9d3FlV9bBX0n8ygGmkVqUP/dQvXHrmcJBSDaImCIAmzFIwvqKZlDjD1R+/NqfEUHk11WhB2/sFqJ5j5y8ysv8AcjzzAglJ2yTM2FV0MfZc+yKFEuoeqbmULqcfagiqvhqTlMpGz0oTI58Bl9mmqhOnmBrwjdfFkfbAS/vJp/6JZyDGPtjGueiDXsgYUjKSgWAC5vNfVJ8uvOiUYfY0xLWR91+elfdlQA8b8pj15gZNmDb/GvXuFSN1o3AKIeA68PpJycpMYl9n3TXu6b7RrjxAgMBAAEwDQYJKoZIhvcNAQELBQADggEBABrwxpzLHB+ejY9S2oNltFMHtwgMO4DlqP9WDRFYhohko7ObDo8vS5UsYA0X1CmC8/m+i+IGL1mmC5XXRb4z8yqEN0zDmwfB/Qm290YNKGY2IN7Fsn/3oD88tObQUPi7rhC2s1Sbd/mgMSgwH8JeonPSup3LQdANCMLMWkGqxcyM/KFCWO4hbPZw3XbCkL9egkfbLPGytWPFi9ZqKv8JWxB+80SPfxHIeEq2bkplxFa2xILbn7uAqnLAbfn/RP5XuaxW4B9e95BDtr/9vfOoModrbaeqt/jCyNFMyhlHPhfRI9h6g/zqrnHWG1FpgNVm3VguuXq3/mUEv6ZeaTQIAiI="
        ],
        "x5t": "4i-hORPlpZIiavTKExHgTUamzmM",
        "x5t#S256": "EbJRJguuvhjjP0QQMWiICOfhoO8CDu3XZUeA9NJHrnU"
      },
      {
        "kid": "z--p_pD1c3LhkjVwayXGfoZb2TgWhYOWroT2l2UQdOE",
        "kty": "EC",
        "alg": "ES512",
        "use": "sig",
        "crv": "P-521",
        "x": "AKznoMGlMz-EhAYBUau5DpXrVHCXt-ufamc_0I7Vs_oQIQSUTPJZOMRtsxzYj4_MZPAGgBwrOO9r9DaLpCptzzIT",
        "y": "ALDjAmNh2_ct_Rho9t7LdqyVHtR4XxZcQGJA88i3Z7UTsc9fzKN80GbxZVf8FXzJqI9sQtH1rQJ3mz1ckDzFb9We"
      },
      {
        "kid": "hJ3QTjxEI7SBbjxA6l7s6AIiVhd87QbFugT5axfn8qU",
        "kty": "RSA",
        "alg": "RS256",
        "use": "sig",
        "n": "os4uc83tvk-gVmK2N7QKVcRDr_CJKkedjJHRmWJ71g6anfu53CJ1HRV4B3pPWNLltmvA6vYMYxYORjZ80a_NNVO2Szp_yDv3rP5PrWmropqOU1ZkaL7O2m8GNAiN7xBHhBsTuRRjFBCHYVs_qspPn_yDt6AZvVw_QRREZFznMGayzADx4S0g-rfDID_nQ7gOR0ISURzl4mFUY52_d-2_YkGIkkgIRNXWhdcK7rii0w8OPkCCwUs3nAgF3Ojh1D_jv5ajB3QL8ib00o4zVRBDB3_Qs0J_wRgMwxtnOPq2YFW5fuDeBE8mRG6zMla5p1v9q5ohJu53r7smWqUkiNgqxw",
        "e": "AQAB",
        "x5c": [
          "MIIClTCCAX0CBgGUjIgK9jANBgkqhkiG9w0BAQsFADAOMQwwCgYDVQQDDANBT0gwHhcNMjUwMTIyMDU0MDEzWhcNMzUwMTIyMDU0MTUzWjAOMQwwCgYDVQQDDANBT0gwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCizi5zze2+T6BWYrY3tApVxEOv8IkqR52MkdGZYnvWDpqd+7ncInUdFXgHek9Y0uW2a8Dq9gxjFg5GNnzRr801U7ZLOn/IO/es/k+taauimo5TVmRovs7abwY0CI3vEEeEGxO5FGMUEIdhWz+qyk+f/IO3oBm9XD9BFERkXOcwZrLMAPHhLSD6t8MgP+dDuA5HQhJRHOXiYVRjnb937b9iQYiSSAhE1daF1wruuKLTDw4+QILBSzecCAXc6OHUP+O/lqMHdAvyJvTSjjNVEEMHf9CzQn/BGAzDG2c4+rZgVbl+4N4ETyZEbrMyVrmnW/2rmiEm7nevuyZapSSI2CrHAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIixf8iP58nCy8y7s/AxZBKQAs8mWyaGMyg43StZv1UfB8s6P+yp4Zu6IGREGtqBnjQFVYL2Zff1/H2uOpALyc23lCaEOT6u64z8a30hz9XlWNRXOuNmYuxYs1IC8NwdFBaFGP9k3wmm9diy4g6W+w6DzgqnfyIkTs+ez+F0EOzSyI2BxoJeeR/Tv1UL+asMRAgWUxvik199vDZpmpumKTALIhKWpq8h3Us8EeWoFXV6hWIxkizch9UHHlQC+2Jvkqcn3ggcg7bwAVkjNSoEPM69rF9ShVrGY52bSdw8bFE5pylH+J7AnMicpBtokm0C3ZsnYT9We36uiW2DjeMKINw="
        ],
        "x5t": "SIkpG4PcMxK0sjotJl6dVJvphRk",
        "x5t#S256": "PK4lHW3gNS4z8AdLBvfUnqYU9RPI5JejKnWzV-OWLak"
      },
      {
        "kid": "zAJizLLeNqjFFLUzhElN9j51FME88XgMIsf81uLrr0o",
        "kty": "RSA",
        "alg": "RSA-OAEP-256",
        "use": "enc",
        "n": "npsxpbmuDwUM-FmX7cKFOtYgw60_U5vHAI9roDBa8SY4CDm-UjK5QntwtMDsmfumQTZu662d-syLQF9E9vXDfLUQlVc3U4XcU76JG8SQO-YPElb7ATNMIJhg-0sA4S4TphNGO7nCtyaTDKaglT0Ro-HSNts_mFJCabuEE6Ks8O6yYs_R7NllmZ9ReFgphwdPH3HQBMsNf1F4BDlftEyemhD8SEUtry1YHJ-vlRWaEyhv4j86NZF4YnYd1jbWnLVXKVxrCWqKnfwkTwK5qfFHqgQXBqkiLXvVKDcSogL-vettnzEtIGeHTcKm9LuMdSOKSBrunxWsuyCqHMYlrCe0uQ",
        "e": "AQAB",
        "x5c": [
          "MIIClTCCAX0CBgGUjN/OSjANBgkqhkiG9w0BAQsFADAOMQwwCgYDVQQDDANBT0gwHhcNMjUwMTIyMDcxNjA1WhcNMzUwMTIyMDcxNzQ1WjAOMQwwCgYDVQQDDANBT0gwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCemzGlua4PBQz4WZftwoU61iDDrT9Tm8cAj2ugMFrxJjgIOb5SMrlCe3C0wOyZ+6ZBNm7rrZ36zItAX0T29cN8tRCVVzdThdxTvokbxJA75g8SVvsBM0wgmGD7SwDhLhOmE0Y7ucK3JpMMpqCVPRGj4dI22z+YUkJpu4QToqzw7rJiz9Hs2WWZn1F4WCmHB08fcdAEyw1/UXgEOV+0TJ6aEPxIRS2vLVgcn6+VFZoTKG/iPzo1kXhidh3WNtactVcpXGsJaoqd/CRPArmp8UeqBBcGqSIte9UoNxKiAv69622fMS0gZ4dNwqb0u4x1I4pIGu6fFay7IKocxiWsJ7S5AgMBAAEwDQYJKoZIhvcNAQELBQADggEBAADlu0eaHk2odYhYwpcaEyyjSzGhd7grtz2vrMwa1JK0UhmmeazjYAHx3CoVjfJi6EKt7GhnQL9zrln3xoSq6hlVJaqoF8+8aiUod84OZAJSqmduoQsfgulZ33rv35CrlHV9zPn8sYUNuI86Gv+3eP9yhqtof9W9kfptrgKu4sE2ovTGe12dBjLcK2v0Tb1jsXlNJ6vAPRE0hL5zf2iuKUvFBx3zJ4TgPhqC60a+YP8cnt6Cu5qVwjG4kGtkJREXhiyWJVZFoCbKnDfa9N90DWJ9DG748S6Ttg5TsjbPZmxIZubCRl+jBnDxeBo+SHh6WETLlsXq8HITraQ5sSaq6as="
        ],
        "x5t": "fUfSijmrmKYHkXWlZDQTEO6PYvI",
        "x5t#S256": "iLukz20qtw2Uuq0efaT94N5U4jr6CCRtr13SM7EDmP4"
      },
      {
        "kid": "JKo3R-QBAZoIbELuQmxfPSX5m4Pg9a9rRRCfRjjlJpo",
        "kty": "RSA",
        "alg": "RS256",
        "use": "sig",
        "n": "4jqo6LUVlpBapRt1aGPsXBeNGsnWYceTYQJw5cT8XaPEho6yBs7NLDH-48XtB1owIoYXG7sWDqB2thr8N-4UrYyHC2HitdJA7-6aUYPqdPukTpHijkxFfrDlJfLCelhWfKsOlWjM_886TaX4EScgiO3FSInrFIxmrg9xpkpi2oq42I3xqsAyfB_4xZtDeyhG4sGZXAbwcntzpko-FVunxw4LqGWKa0VEd6jaTDLxog8nDHTHVV1RyoLNFmTvTPwql7VIiNzKOO8VzgpikauegsSV2JOemZAI5-YpwFIoJXW9Ldmsm6To_f3WsK4hCgyms0Z3jLinV4-aoKEl1yaPVw",
        "e": "AQAB",
        "x5c": [
          "MIIClTCCAX0CBgGUiau8rDANBgkqhkiG9w0BAQsFADAOMQwwCgYDVQQDDANBT0gwHhcNMjUwMTIxMTYyMDIxWhcNMzUwMTIxMTYyMjAxWjAOMQwwCgYDVQQDDANBT0gwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDiOqjotRWWkFqlG3VoY+xcF40aydZhx5NhAnDlxPxdo8SGjrIGzs0sMf7jxe0HWjAihhcbuxYOoHa2Gvw37hStjIcLYeK10kDv7ppRg+p0+6ROkeKOTEV+sOUl8sJ6WFZ8qw6VaMz/zzpNpfgRJyCI7cVIiesUjGauD3GmSmLairjYjfGqwDJ8H/jFm0N7KEbiwZlcBvBye3OmSj4VW6fHDguoZYprRUR3qNpMMvGiDycMdMdVXVHKgs0WZO9M/CqXtUiI3Mo47xXOCmKRq56CxJXYk56ZkAjn5inAUigldb0t2aybpOj9/dawriEKDKazRneMuKdXj5qgoSXXJo9XAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHpauFhmjMD1Nz3LEEp6mA3YNtpMZ6r8HUWVMBxkx0aWHFDjn/T5w6cCLO+HUTmtZzF8iZ/mVSjnWaNPmCKNELowXo5g8ALjcIoUzIqvaXd5mO0kbGv4Si76CGofoXXrKF8Rq8E6Bqn0Xc58DIMsna3CHHgaW608xiCFj3O7SsVr2SChf2uSB6+8Tj5GgCF72DRCnbW6/uVXz3n2LJNZ/YGdimFrdoHexYCfw2A527soiRsRbICcfWi1kdjfAhQRsuQFKc4vPTDqQG+A7ykuBRK33v3wLNEpOw0TgYAcfNgQiw1r9dRzl+mInjqIbGP9jteBeAz8c9UHuu8DDBB9cd8="
        ],
        "x5t": "MONwrPcWqvB9SZ0XMEodMveYjus",
        "x5t#S256": "HTQrii8xKwFLOKxO2DX8wxtSRA3mFbbaSiGkjaCvfqo"
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});