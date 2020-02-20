import React from "react";
import { renderRoutes } from "react-router-config";
import { RouteConfigComponentProps } from 'react-router-config'

const NullLayout = ({ route }: RouteConfigComponentProps) => <>{renderRoutes(route?.routes)}</>;

export default NullLayout;
