import React, { useEffect } from "react";
import _ from "lodash";

import Action from "./Action";
import { htmlToReact, withPrefix } from "../utils";

const Footer = (props) => {
  useEffect(() => {
    console.log(
      "footerData",
      _.get(props, "pageContext.site.siteMetadata.footer.social_links", null)
    );
  }, []);

  return (
    <footer className="site-footer">
      <div className="container container--lg">
        {(_.get(props, "pageContext.site.siteMetadata.footer.has_nav", null) ||
          _.get(
            props,
            "pageContext.site.siteMetadata.footer.has_social",
            null
          )) && (
          <div className="site-footer__nav">
            {_.get(
              props,
              "pageContext.site.siteMetadata.footer.has_nav",
              null
            ) && (
              <ul className="site-footer__menu menu">
                {_.map(
                  _.get(
                    props,
                    "pageContext.site.siteMetadata.footer.nav_links",
                    null
                  ),
                  (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...props} action={action} />
                    </li>
                  )
                )}
              </ul>
            )}
            {_.get(
              props,
              "pageContext.site.siteMetadata.footer.has_social",
              null
            ) && (
              <ul className="site-footer__social menu">
                {_.map(
                  _.get(
                    props,
                    "pageContext.site.siteMetadata.footer.social_links",
                    null
                  ),
                  (action, action_idx) => (
                    <li key={action_idx}>
                      {_.get(action, "social_icon", null) && (
                        <a href={_.get(action, "url", "#")} target="_blank">
                          <img
                            src={withPrefix(_.get(action, "social_icon", null))}
                            height="30px"
                            width="30px"
                          />
                        </a>
                      )}
                      {/* <Action {...props} action={action} /> */}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        )}
        <div className="site-footer__copyright">
          {_.get(
            props,
            "pageContext.site.siteMetadata.footer.content",
            null
          ) && (
            <span>
              {htmlToReact(
                _.get(
                  props,
                  "pageContext.site.siteMetadata.footer.content",
                  null
                )
              )}
            </span>
          )}
          {_.map(
            _.get(props, "pageContext.site.siteMetadata.footer.links", null),
            (action, action_idx) => (
              <Action key={action_idx} {...props} action={action} />
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
