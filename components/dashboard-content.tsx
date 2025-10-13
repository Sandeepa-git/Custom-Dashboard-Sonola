"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Play,
  TrendingUp,
  Users,
  Zap,
  Star,
  ExternalLink,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

export function DashboardContent() {
  return (
    <div className="p-6 sm:p-12 space-y-12 bg-background dark:bg-gray-900 transition-colors duration-300">
      {/* Hero + Features */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Text + CTA */}
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-snug dark:text-white">
            Getting started in Sonola
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
            Create intriguing marketing contents with ease!
          </p>
          <Button
            size="lg"
            className="rounded-lg flex items-center px-4 py-2 text-base"
          >
            <Play className="w-4 h-4 mr-2" />
            Start creating now
          </Button>
        </div>

        {/* Right Feature Cards */}
        <div className="flex-1">
          <div className="flex gap-3 flex-wrap lg:flex-nowrap">
            <Card className="flex-1 p-3 space-y-1 bg-muted/40 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-1">
                <TrendingUp className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Increase Customer Retention
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                85%
              </p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">
                AI Summarization Reports
              </p>
            </Card>

            <Card className="flex-1 p-3 space-y-1 bg-muted/40 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-1">
                <Play className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Emma Owens
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Lead Project Director
              </p>
            </Card>

            <Card className="flex-1 p-3 space-y-1 bg-muted/40 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-1">
                <Users className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Collaborate
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Invite people
              </p>
            </Card>

            <Card className="flex-1 p-3 space-y-1 bg-muted/40 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-1">
                <Zap className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Schedule Posts
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Advanced Content Calendar
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-muted-foreground dark:text-gray-300" />
            <h2 className="text-lg font-semibold dark:text-white">For you</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            View all templates
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700">
              <img
                src="/web-design-templates.jpg"
                alt="Web Pages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold dark:text-white">Web Pages</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Good products deserve good websites.
              </p>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700">
              <img
                src="/presentation-slides-colorful.jpg"
                alt="Presentations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold dark:text-white">Presentations</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Easily edit our animated templates.
              </p>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700">
              <img
                src="/diverse-social-media-posts.png"
                alt="Social Media"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold dark:text-white">Social Media</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Everything you need for socials.
              </p>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700">
              <img
                src="/sales-pitch-deck.jpg"
                alt="Sales Pitch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold dark:text-white">Sales Pitch</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Turn your dreams into reality.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold dark:text-white">Recents</h2>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            See in projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700 relative">
              <img
                src="/document-with-text.png"
                alt="Document"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-700 text-foreground p-1.5 rounded">
                <ExternalLink className="w-4 h-4 dark:text-gray-200" />
              </div>
            </div>
            <div className="p-4 flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <h3 className="font-semibold text-sm dark:text-white">
                  Document
                </h3>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Max · May 14, 2025
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 dark:text-gray-200" />
              </Button>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700 relative">
              <img
                src="/dark-website-design.jpg"
                alt="Web Pages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                Updating
              </div>
            </div>
            <div className="p-4 flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <h3 className="font-semibold text-sm dark:text-white">
                  Web Pages
                </h3>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Max · May 14, 2025
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 dark:text-gray-200" />
              </Button>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700 relative">
              <img
                src="/video-editing-workspace.png"
                alt="60 Second Cut"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <h3 className="font-semibold text-sm dark:text-white">
                  60 Second Cut
                </h3>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Caroline · May 14, 2025
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 dark:text-gray-200" />
              </Button>
            </div>
          </Card>

          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow rounded-2xl bg-card dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="aspect-[4/3] overflow-hidden bg-muted dark:bg-gray-700 relative">
              <img
                src="/colorful-web-design.jpg"
                alt="Web Pages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                Needs Review
              </div>
            </div>
            <div className="p-4 flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <h3 className="font-semibold text-sm dark:text-white">
                  Web Pages
                </h3>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Mark · May 14, 2025
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 dark:text-gray-200" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
