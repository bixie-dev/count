import { useState } from "react";

import Link from "next/link";

const Forgot = () => {
  const [flag, setFlag] = useState(1);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/**
       * Forgot Password?
       */}
      {flag == 1 && (
        <div className="">
          <div className="border-4 border-[#4269E1] rounded-[40px] text-[20px] font-[500] p-4">
            <div className="">
              <div className="w-[160px] float-left p-4">
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <div className="p-4">
                Sehr geehrte(r){" "}
                <span className="text-[#4269E1]">[Nutzer/in]</span>,
                <br />
                wir haben eine Anfrage erhalten, Ihr Passwort für
                zurückzusetzen. Wenn Sie diese Anfrage nicht gestellt haben,
                können Sie diese E-Mail ignorieren.
              </div>
            </div>
            <div className="mt-2">
              <div>
                Um Ihr Passwort zurückzusetzen, klicken Sie bitte auf den
                folgenden Link:
              </div>
              <div className="text-[#4269E1]">
                [fügen Sie hier den Link zum Zurücksetzen des Passworts ein]
              </div>
              <br />
              <div>
                Falls der oben genannte Link nicht funktioniert, kopieren Sie
                bitte die folgende URL in Ihren Browser:
              </div>
              <div className="text-[#4269E1]">
                [fügen Sie hier die URL zum Zurücksetzen des Passworts ein]
              </div>
              <br />
              <div>
                Bitte beachten Sie, dass dieser Link nur für einen Zeitraum von
                24 Stunden gültig ist. Wenn Sie Ihr Passwort innerhalb dieses
                Zeitrahmens nicht zurücksetzen, müssen Sie eine erneute
                Passwort-Zurücksetzung beantragen.
              </div>
              <br />
              <div>Vielen Dank,</div>
              <a
                className="text-[#4269E1]"
                onClick={() => {
                  setFlag(2);
                }}
              >
                [Ihr Name/Website-Name]
              </a>
            </div>
          </div>
        </div>
      )}
      {/**
       * Forgot Email Password Link
       */}
      {flag == 2 && (
        <div className="py-8 px-8 border-[4px] border-[#4269E1] rounded-[40px] text-[18px] font-[500]">
          <div className="">
            <div className="w-[160px] float-left p-4">
              <img src="/assets/images/logo.png" alt="" />
            </div>
            <div className="p-4">
              Sehr geehrte/r
              <span className="text-[#4269E1]">
                <Link href="/Material">&nbsp;[Empfänger/in]</Link>
              </span>
              ,
              <br />
              ich hoffe, es geht Ihnen gut. Wir freuen uns, Sie einzuladen. Um
              sich zu registrieren, folgen Sie bitte dem unten stehenden Link:
              <div className="text-[#4269E1]">
                [Registrierungslink einfügen]
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div>
              Sobald Sie auf den Link klicken, werden Sie zur
              Registrierungsseite weitergeleitet, auf der Sie Ihre Details
              ausfüllen und den Registrierungsprozess abschließen können.
            </div>
            <br />
            <div>
              Bitte beachten Sie, dass die Anmeldefrist am
              <span className="text-[#4269E1]">&nbsp;[Datum einfügen]</span>
              endet. Stellen Sie daher sicher, dass Sie Ihre Registrierung vor
              diesem Datum abschließen.
            </div>
            <br />
            <div>
              Wenn Sie Fragen oder Bedenken haben, können Sie uns unter
              <span className="text-[#4269E1]">
                &nbsp;[Kontaktinformationen einfügen]
              </span>
              kontaktieren. Wir freuen uns darauf, Sie bei Counted-Tech begrüßen
              zu dürfen.
            </div>
            <br />
            <div>Mit freundlichen Grüßen, </div>
            <div>Jacek Marenin.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forgot;
